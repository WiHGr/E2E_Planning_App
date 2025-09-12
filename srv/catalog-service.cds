using PlanningApp from '../db';

service CatalogService {
  entity PlanningData   as projection on PlanningApp.PlanData;
  entity ProductionPlan as projection on PlanningApp.ProductionPlan;
  entity HeadcountPlan  as projection on PlanningApp.HeadcountPlan;
}
