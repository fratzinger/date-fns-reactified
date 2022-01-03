import { eachHourOfInterval as _eachHourOfInterval } from "date-fns";
import { reactify } from "@vueuse/shared";

export const eachHourOfInterval = reactify(_eachHourOfInterval);