import { eachWeekOfInterval as _eachWeekOfInterval } from "date-fns";
import { reactify } from "@vueuse/shared";

export const eachWeekOfInterval = reactify(_eachWeekOfInterval);