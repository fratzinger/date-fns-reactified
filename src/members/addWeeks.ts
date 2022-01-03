import { addWeeks as _addWeeks } from "date-fns";
import { reactify } from "@vueuse/shared";

export const addWeeks = reactify(_addWeeks);