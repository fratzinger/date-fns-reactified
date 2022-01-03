import { eachMinuteOfInterval as _eachMinuteOfInterval } from "date-fns";
import { reactify } from "@vueuse/shared";

export const eachMinuteOfInterval = reactify(_eachMinuteOfInterval);