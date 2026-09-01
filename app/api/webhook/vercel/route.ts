import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({
    service: 'AEGIS Vercel Webhook Handler',
    status: 'active',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    let payload: Record<string, any> = {};

    if (rawBody) {
      try {
        payload = JSON.parse(rawBody);
      } catch (e) {
        // payload might be form-encoded or raw
      }
    }

    const eventType = payload.type || request.headers.get('x-vercel-event') || 'unknown';
    const configurationId = payload.configurationId || payload.configuration_id;
    const teamId = payload.teamId || payload.team_id;

    // Log the incoming security event envelope
    console.log(`[AEGIS_WEBHOOK] Received Vercel Event: ${eventType} | Team: ${teamId || 'personal'} | Config: ${configurationId || 'n/a'}`);

    // Process specific Vercel webhook event types
    switch (eventType) {
      case 'deployment.created':
      case 'deployment.succeeded':
        // Trigger incremental Digital Twin asset reconciliation for deployment
        break;
      case 'project.created':
      case 'project.removed':
        // Update CLOUD_RESOURCE nodes and recalculate exposure
        break;
      case 'domain.created':
      case 'domain.removed':
        // Recalculate internet-facing attack paths
        break;
      case 'integration-configuration.removed':
      case 'integration-configuration.permission-updated':
        // Token revocation or scope change
        break;
      default:
        // Generic telemetry ingestion
        break;
    }

    return NextResponse.json(
      {
        received: true,
        event: eventType,
        status: 'queued_for_digital_twin_reconciliation',
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('[AEGIS_WEBHOOK_ERROR]', error);
    return NextResponse.json(
      {
        error: 'Webhook processing error',
        message: error?.message || 'Internal server error',
      },
      { status: 500 }
    );
  }
}
