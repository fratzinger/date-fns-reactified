import { eachWeekOfInterval as _eachWeekOfInterval } from "date-fns";
import { reactify } from "@vueuse/core";

export const eachWeekOfInterval = reactify(_eachWeekOfInterval);