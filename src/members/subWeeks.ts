import { subWeeks as _subWeeks } from "date-fns";
import { reactify } from "@vueuse/core";

export const subWeeks = reactify(_subWeeks);