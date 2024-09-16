import { configureStore } from "@reduxjs/toolkit";
import topicSlice from "../features/topic/topicSlice";

export default configureStore({
  reducer: {
    topics: topicSlice
  },
});
