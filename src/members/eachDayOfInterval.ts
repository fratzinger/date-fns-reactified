import { eachDayOfInterval as _eachDayOfInterval } from "date-fns";
import { reactify } from "@vueuse/core";

export const eachDayOfInterval = reactify(_eachDayOfInterval);