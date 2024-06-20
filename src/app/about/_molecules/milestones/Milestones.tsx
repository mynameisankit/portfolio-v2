'use client';

import { useMemo } from "react";

// Components
import Timeline, { TIMELINE_MODE } from "./molecules/timeline";

// Helpers
import { makeTimelineItems } from "./milestones.helpers";

function Milestones({ timeline }) {
  const timelineItems = useMemo(() => makeTimelineItems(timeline), [timeline]);

  return <Timeline mode={TIMELINE_MODE.VERTICAL_ALTERNATING} items={timelineItems} />
};

export default Milestones;
