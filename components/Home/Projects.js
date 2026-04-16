"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { projectsData } from "@/constants/portfolioProjects";
import { useMemo, useState } from "react";

export default function Projects() {

    const obj = projectsData.map((project, index) => ({
        name: project.name,
        year: project.year,
        image: project.imageMobile,
        slug: project.slug,
        sr: String(index + 1).padStart(2, '0'),
    }));

    const ITEMS_PER_PAGE = 3;
    const [page, setPage] = useState(1);
    const totalPages = Math.max(1, Math.ceil(obj.length / ITEMS_PER_PAGE));

    const pagedObj = useMemo(() => {
        const start = (page - 1) * ITEMS_PER_PAGE;
        return obj.slice(start, start + ITEMS_PER_PAGE);
    }, [page, obj]);

    const canPrev = page > 1;
    const canNext = page < totalPages;

    return (
        <main className="w-full h-full my-8 bg-[#e6e4e4]" id="Projects" >
            <div className="lg:hidden" >
                <div className="flex items-center justify-center" >
                    <h3 className="uppercase file text-[1.6rem] md:text-[3.2rem] lg:text-[4.2rem] xl:text-[6rem] mb-8" >SOME  Featured Work</h3>
                </div>


                {/* Card  */}
                {pagedObj.map((item, index) => (
                    <div key={index} className="flex lg:px-6 mb-24 gap-3 sm:gap-12 mx-5 lg:mx-5 md:items-start items-center justify-center md:gap-24 xl:gap-8rem lg:gap-44   border-t-[#652626]" >
                        <div className="flex flex-col ml-3 md:ml-0 gap-3 " >
                            <h4 className="w-fit " >[ {item.sr} ]</h4>
                            <h2 className="font-semibold w-[11rem] sm:text-[1.3rem]" >{item.name}</h2>
                            <Link href={`/projects/${item.slug}`} > <div className="bg-white h-fit hover:bg-black cursor-pointer hover:text-white   w-fit p-3 rounded-full border" >

                                <FaArrowRightLong />
                            </div> </Link>

                            <span className="w-fit md:hidden mt-36" >
                                [ Year ] <br /> {item.year}
                            </span>
                        </div>


                        {/* Image */}

                        <Link href={`/projects/${item.slug}`} >  <Image
                            src={`${item.image}`}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className=" h-[21rem] rounded-lg object-cover lg:mr-16 md:mr-12 xl:mr-32 w-[15rem] lg:h-[25rem] lg:w-[18rem]"
                        /></Link>
                        <span className="w-fit hidden md:block" >
                            [ Year ] <br /> 2025
                        </span>
                    </div>
                ))}

                <div className="mx-5 mt-2 flex items-center justify-between text-black">
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
            </div>

            <div className="hidden" >
                <div className="flex items-center justify-center" >
                    <h3 className="uppercase file text-[1.6rem] md:text-[3.2rem] lg:text-[4.2rem] xl:text-[6rem] mb-8" >SOME  Featured Work</h3>
                </div>





            </div>

        </main>
    )
}
