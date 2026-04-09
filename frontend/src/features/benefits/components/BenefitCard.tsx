import React from 'react';
import { BenefitCardProps } from '../types/benefits.types';
import { COLORS, SPACING } from '../constants/theme.constants';

export const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
  gradient,
  iconBg,
  iconSize,
  titleSize = 14,
  descSize = 12,
  flex,
  layout = 'vertical',
  titleColor = COLORS.cardText,
  descriptionColor = COLORS.cardSubtext,
  iconBorder,
}) => {
  if (layout === 'horizontal') {
    return (
      <div
        style={{
          background: gradient,
          borderRadius: 20,
          padding: SPACING.cardCompactPadding,
          display: 'flex',
          alignItems: 'flex-start',
          gap: SPACING.gridGap,
        }}
      >
        <div
          style={{
            width: iconSize.width,
            height: iconSize.height,
            borderRadius: iconSize.radius,
            background: iconBg,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...(iconBorder && { border: iconBorder }),
          }}
        >
          {icon}
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: titleSize, fontFamily: 'var(--font-poppins)', color: titleColor, margin: '0 0 4px' }}>
            {title}
          </p>
          <p style={{ fontSize: descSize, fontFamily: 'var(--font-inter)', color: descriptionColor, lineHeight: 1.55, margin: 0 }}>
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        flex,
        background: gradient,
        borderRadius: 20,
        padding: SPACING.cardPadding,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: layout === 'vertical' && flex ? 'center' : 'flex-start',
      }}
    >
      <div
        style={{
          width: iconSize.width,
          height: iconSize.height,
          borderRadius: iconSize.radius,
          background: iconBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: SPACING.iconMargin,
          ...(iconBorder && { border: iconBorder }),
        }}
      >
        {icon}
      </div>
      <p style={{ fontWeight: 700, fontSize: titleSize, fontFamily: 'var(--font-poppins)', color: titleColor, margin: `0 0 ${SPACING.titleMargin}px` }}>
        {title}
      </p>
      <p style={{ fontSize: descSize, fontFamily: 'var(--font-inter)', color: descriptionColor, lineHeight: 1.55, margin: 0 }}>
        {description}
      </p>
    </div>
  );
};
