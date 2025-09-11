namespace PlanningApp;

entity PlanningData {
  key ID           : UUID;
      customer     : String(100);
      region       : String(50);
      kpi          : String(100);         // Umsatz, Marge, etc.
      value        : Decimal(15,2);
      currency     : String(3);           // EUR, USD
      version      : Integer default 1;
      changedBy    : String(50);
      changedAt    : Timestamp;
}