import { subWeeks as _subWeeks } from "date-fns";
import { reactify } from "@vueuse/shared";

export const subWeeks = reactify(_subWeeks);