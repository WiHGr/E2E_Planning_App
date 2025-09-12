using PlanningApp from '../db/schema';

service CatalogService {
  entity PlanningData as projection on PlanningApp.PlanningData;
}
