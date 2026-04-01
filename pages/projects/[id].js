import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { fetchAPI } from "../../lib/api";
import PageHeader from "../../components/PageHeader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = ({ section }) => {
  if (!section) return null;

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [photoIndex, setPhotoIndex] = useState(-1);
  const galleryImages = section.gallery || [];
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      gsap.from(galleryRef.current.querySelectorAll(".lightbox-thumb"), {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: galleryRef.current, start: "top 85%" },
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>{section.title} | Disegno</title>
        <meta name="description" content={section.title} />
      </Head>

      {/* Page Header */}
      {section.image && (
        <PageHeader
          title={section.title}
          image={`${API_URL}${section.image.url}`}
        />
      )}

      <div className="container-fluid py-5">
        <div className="container py-4">

          {/* Back link */}
          <div className="mb-4">
            <Link href="/#tmimata" className="btn btn-outline-secondary btn-sm">
              &larr; Επιστροφή
            </Link>
          </div>

          {/* Description + Gallery */}
          <div className="row g-5 align-items-start mb-5">
            {section.description && (
              <div className="col-lg-6">
                <div
                  className="project-description"
                  dangerouslySetInnerHTML={{ __html: section.description }}
                />
              </div>
            )}

            {galleryImages.length > 0 && (
              <div className="col-lg-6">
                <div ref={galleryRef} className="row g-3">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="col-6">
                      <div
                        className="position-relative lightbox-thumb"
                        style={{ height: 200, cursor: "pointer" }}
                        onClick={() => setPhotoIndex(index)}
                      >
                        <Image
                          src={`${API_URL}${image.url}`}
                          alt={`${section.title} - ${index + 1}`}
                          fill
                          className="img-fluid rounded"
                          style={{ objectFit: "cover" }}
                        />
                        <div className="lightbox-thumb-overlay">
                          <i className="fa fa-search-plus fa-2x text-white" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Lightbox */}
      {photoIndex >= 0 && (
        <div className="custom-lightbox-overlay" onClick={() => setPhotoIndex(-1)}>
          <button className="custom-lightbox-close" onClick={() => setPhotoIndex(-1)}>&times;</button>
          <button
            className="custom-lightbox-prev"
            onClick={(e) => { e.stopPropagation(); setPhotoIndex((photoIndex - 1 + galleryImages.length) % galleryImages.length); }}
          >&#8249;</button>
          <div className="custom-lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            <img
              src={`${API_URL}${galleryImages[photoIndex].url}`}
              alt={`${section.title} - ${photoIndex + 1}`}
              style={{ maxHeight: "90vh", maxWidth: "90vw", objectFit: "contain" }}
            />
            <div className="custom-lightbox-counter">
              {photoIndex + 1} / {galleryImages.length}
            </div>
          </div>
          <button
            className="custom-lightbox-next"
            onClick={(e) => { e.stopPropagation(); setPhotoIndex((photoIndex + 1) % galleryImages.length); }}
          >&#8250;</button>
        </div>
      )}
    </>
  );
};

export async function getStaticPaths() {
  const sectionsRes = await fetchAPI("/sections", {
    fields: ["id"],
  });

  const paths =
    sectionsRes && sectionsRes.data
      ? sectionsRes.data.map((section) => ({
          params: { id: String(section.id) },
        }))
      : [];

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const sectionsRes = await fetchAPI(`/sections/`, {
    filters: { id: id },
    populate: ["image", "gallery", "section_categories"],
  });

  const section = sectionsRes && sectionsRes.data ? sectionsRes.data[0] : null;

  if (!section) {
    return { notFound: true };
  }

  return {
    props: { section },
    revalidate: 60,
  };
}

export default ProjectDetail;
