import { formatDistanceToNowStrict as _formatDistanceToNowStrict } from "date-fns";
import { reactify } from "@vueuse/core";

export const formatDistanceToNowStrict = reactify(_formatDistanceToNowStrict);