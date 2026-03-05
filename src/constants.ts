// FIX: Populate STATUS_COLORS to be used in Badge.tsx. This file was previously empty.
import { RequisitionStatus } from './types';

export const STATUS_COLORS: { [key in RequisitionStatus]: string } = {
  [RequisitionStatus.PENDING]: 'bg-yellow-100 text-yellow-800',
  [RequisitionStatus.APPROVED_BY_DEPT_HEAD]: 'bg-blue-100 text-blue-800',
  [RequisitionStatus.APPROVED_BY_SECTION_PRESIDENT]: 'bg-indigo-100 text-indigo-800',
  [RequisitionStatus.AWAITING_RECEIPT]: 'bg-cyan-100 text-cyan-800',
  [RequisitionStatus.PENDING_FINANCE_VERIFICATION]: 'bg-purple-100 text-purple-800',
  [RequisitionStatus.COMPLETED]: 'bg-green-100 text-green-800',
  [RequisitionStatus.REJECTED]: 'bg-red-100 text-red-800',
  [RequisitionStatus.CHANGES_REQUESTED]: 'bg-orange-100 text-orange-800',
  [RequisitionStatus.RECEIPT_CORRECTION_REQUESTED]: 'bg-orange-100 text-orange-800',
};
