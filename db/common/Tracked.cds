// db/common/Tracked.cds
aspect Tracked {
  version    : Integer default 1;
  changedBy  : String(50);
  changedAt  : Timestamp;
}
