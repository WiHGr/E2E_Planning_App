// db/headcount-model.cds
using { Tracked } from './common/Tracked';

namespace PlanningApp;

entity HeadcountPlan : Tracked {
  key ID         : UUID;
      year       : Integer;
      month      : Integer;
      department : String(50);
      role       : String(50);
      plannedFTE : Decimal(5,2);
}
