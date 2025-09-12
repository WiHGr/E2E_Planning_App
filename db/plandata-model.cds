// db/data-model.cds
using { Tracked } from './common/Tracked';

namespace PlanningApp;

entity PlanData : Tracked {
  key ID         : UUID;
      year       : Integer;
      month      : Integer;
      costCenter : String(50);
      region     : String(50);
      product    : String(100);
      kpi        : String(100);
      value      : Decimal(15,2);
      currency   : String(3);
}
