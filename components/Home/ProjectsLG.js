"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import useHoverImage from "../Hook/useHoverImage";
import { projectsData } from "@/constants/portfolioProjects";


const awards = projectsData.map(project => ({
  name: project.name,
  year: project.year,
  image: project.imageDesktop,
  slug: project.slug,
}));

export default function ProjectsLG() {
  const { hoveredImage, handleMouseEnter, handleMouseLeave, imageRef } =
    useHoverImage();

  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(awards.length / ITEMS_PER_PAGE));

  const pagedAwards = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return awards.slice(start, start + ITEMS_PER_PAGE);
  }, [page]);

  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <div className="mx-16 xl:mx-24 mt-10 px-4 relative hidden lg:block">
      <div className="flex items-center justify-center">
        <h3 className="uppercase file text-[1.6rem] md:text-[3.2rem] lg:text-[4.2rem] xl:text-[6rem] mb-8">
          SOME Featured Work
        </h3>
      </div>

      {pagedAwards.map((award) => (
        <Link href={`/projects/${award.slug}`} key={award.slug}>
          <div
            className="flex justify-between items-center py-8 border-t border-gray-500 text-black text-lg font-bold relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter(award.image)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-3xl file">{award.name}</span>
            <span>{award.year}</span>
          </div>
        </Link>
      ))}

      <div className="border-t border-gray-500"></div>

      <div className="mt-6 flex items-center justify-between text-black">
        <button
          type="button"
          disabled={!canPrev}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="rounded-md border border-black/10 bg-black/5 px-3 py-1.5 text-sm font-semibold disabled:opacity-40"
        >
          Prev
        </button>

        <div className="text-sm font-semibold">
          Page {page} / {totalPages}
        </div>

        <button
          type="button"
          disabled={!canNext}
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          className="rounded-md border border-black/10 bg-black/5 px-3 py-1.5 text-sm font-semibold disabled:opacity-40"
        >
          Next
        </button>
      </div>

      {/* Hover Image */}
      {hoveredImage && (
        <img
          ref={imageRef}
          src={hoveredImage}
          alt="Hovered Award"
          className="w-56 h-56 object-cover pointer-events-none top-0 left-0 fixed z-[100] opacity-100 rounded-lg shadow-xl border-2 border-white"
          style={{ transform: "translate(-50%, -50%)" }}
        />
      )}
    </div>
  );
}
