import { addWeeks as _addWeeks } from "date-fns";
import { reactify } from "@vueuse/core";

export const addWeeks = reactify(_addWeeks);