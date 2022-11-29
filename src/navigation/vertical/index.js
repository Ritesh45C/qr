import forms from "./forms";
import dashboards from "./dashboards";
import product from "./product";
import reports from "./reports";
import job from "./job";
import profile from './profile'

// ** Merge & Export
export default [...dashboards, ...job, ...reports, ...product,...profile, ...forms];
