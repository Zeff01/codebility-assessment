import React from 'react';
import { Benefits } from '../data/benefits.data';
import { COLORS, SPACING } from '../constants/theme.constants';
import { WhyChooseSectionProps, Benefit } from '../types/benefits.types';
import { BenefitCard } from './BenefitCard';

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
  heading = 'Why Choose Moola?',
  subtitle = 'Experience the most sophisticated rewards platform designed for the modern lifestyle',
}) => {
  const leftColumn = Benefits.filter((b) => b.column === 'left');
  const rightColumn = Benefits.filter((b) => b.column === 'right');

  const renderColumn = (column: Benefit[]) =>
    column.map((benefit) => (
      <BenefitCard
        key={benefit.id}
        icon={benefit.icon}
        title={benefit.title}
        description={benefit.description}
        gradient={benefit.gradient}
        iconBg={benefit.iconBg}
        iconSize={benefit.iconSize}
        titleSize={benefit.titleSize}
        descSize={benefit.descSize}
        flex={benefit.flex}
        layout={benefit.layout}
        titleColor={benefit.titleColor}
        descriptionColor={benefit.descriptionColor}
        iconBorder={benefit.iconBorder}
      />
    ));

  return (
    <section
      style={{
        background: COLORS.background,
        padding: SPACING.containerPadding,
        borderRadius: 18,
        maxWidth: 1200,
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: SPACING.sectionMargin }}>
        <h2
          style={{
            fontSize: 28,
            fontWeight: 800,
            fontFamily: 'var(--font-poppins)',
            color: COLORS.heading,
            margin: '0 0 8px',
            letterSpacing: '-0.3px',
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            fontSize: 13,
            color: COLORS.subtitle,
            maxWidth: 340,
            margin: '0 auto',
            lineHeight: 1.55,
          }}
        >
          {subtitle}
        </p>
      </div>

      {/* Two-column grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: SPACING.gridGap, alignItems: 'stretch' }}>
        {/* LEFT COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.gridGap }}>
          {renderColumn(leftColumn)}
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.gridGap }}>
          {renderColumn(rightColumn)}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;