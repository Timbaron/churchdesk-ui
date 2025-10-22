
import React from 'react';
import { RequisitionStatus } from '../../types';
import { STATUS_COLORS } from '../../constants';

interface BadgeProps {
  status: RequisitionStatus;
}

const Badge: React.FC<BadgeProps> = ({ status }) => {
  const colorClasses = STATUS_COLORS[status] || 'bg-gray-100 text-gray-800';
  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full inline-block ${colorClasses}`}>
      {status}
    </span>
  );
};

export default Badge;
