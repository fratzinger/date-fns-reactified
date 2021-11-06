import { eachMinuteOfInterval as _eachMinuteOfInterval } from "date-fns";
import { reactify } from "@vueuse/core";

export const eachMinuteOfInterval = reactify(_eachMinuteOfInterval);