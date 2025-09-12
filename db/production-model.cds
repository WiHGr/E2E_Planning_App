// db/production-model.cds
using { Tracked } from './common/Tracked';

namespace PlanningApp;

entity ProductionPlan : Tracked {
  key ID         : UUID;
      year       : Integer;
      month      : Integer;
      product    : String(100);
      plant      : String(50);
      plannedQty : Integer;
      unit       : String(10);         // Stück, kg, etc.
}
