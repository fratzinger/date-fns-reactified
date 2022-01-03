

import { eachWeekendOfInterval as _eachWeekendOfInterval } from "date-fns";
import { reactify } from "@vueuse/shared";

export const eachWeekendOfInterval = reactify(_eachWeekendOfInterval);