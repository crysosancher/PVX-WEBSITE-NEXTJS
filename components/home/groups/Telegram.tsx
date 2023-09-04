import React from "react";
import GroupCard from "./GroupCard";
import { telegramGroupsState } from "./GroupsState";
import useGroup from "./hook/useGroup";

export default function Telegram() {
  const telegramGroups = telegramGroupsState();
  const { groups, checkCopied } = useGroup(telegramGroups);

  return (
    <div className="inline-block">
      <h3 className="text-black bg-slate-200 rounded text-lg w-11/12 m-auto">
        TELEGRAM
      </h3>
      <div className="flex justify-center items-center flex-wrap">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} checkCopied={checkCopied} />
        ))}
      </div>
    </div>
  );
}
