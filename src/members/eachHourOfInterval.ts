import { eachHourOfInterval as _eachHourOfInterval } from "date-fns";
import { reactify } from "@vueuse/core";

export const eachHourOfInterval = reactify(_eachHourOfInterval);