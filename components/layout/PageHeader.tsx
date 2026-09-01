import React from 'react';

interface PageHeaderProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  badgeIcon,
  title,
  description,
  breadcrumbs,
}) => {
  return (
    <div className="relative pt-32 pb-12 md:pt-36 md:pb-16 border-b border-slate-900 overflow-hidden bg-slate-950/40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
            {breadcrumbs.map((bc, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-slate-400">/</span>}
                {bc.href ? (
                  <a href={bc.href} className="hover:text-cyan-400 transition">
                    {bc.label}
                  </a>
                ) : (
                  <span className="text-slate-300 font-semibold">{bc.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase">
            {badgeIcon}
            <span>{badge}</span>
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {title}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
