import { eachDayOfInterval as _eachDayOfInterval } from "date-fns";
import { reactify } from "@vueuse/shared";

export const eachDayOfInterval = reactify(_eachDayOfInterval);