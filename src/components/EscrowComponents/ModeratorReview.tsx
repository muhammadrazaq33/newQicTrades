"use client";

export function ModeratorReview() {
  return (
    <div className="mt-0 rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="flex gap-3 p-4 md:p-6 rounded-lg border-l-[5px] border-l-[#E6B54A]">
        {/* <div className="w-1 rounded bg-amber-400" aria-hidden="true" /> */}
        <div className="flex-1">
          <h3 className="sm:text-[20px] text-[16px] font-semibold text-[#0F172A]">
            Moderator Review Section
          </h3>
          <p className="mt-1 sm:text-sm text-[12px] text-[#475569]">
            This section is visible only to administrators and moderators. Add
            notes and review details for disputed trades here.
          </p>
        </div>
      </div>
    </div>
  );
}
