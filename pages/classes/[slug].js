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
  console.log('section', section)
  if (!section) return null;

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [photoIndex, setPhotoIndex] = useState(-1);
  const galleryImages = section.gallery || [];
  const fileEntries = Array.isArray(section.file)
    ? section.file.filter((entry) => entry?.file?.url)
    : [];
  const toMediaUrl = (url) => {
    if (!url) return "";
    return url.startsWith("http") ? url : `${API_URL}${url}`;
  };
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
        <meta
          name="description"
          content={
            section.description
              ? section.description.replace(/<[^>]+>/g, "").slice(0, 160)
              : section.title
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Disegno" />
        <meta property="og:title" content={`${section.title} | Disegno`} />
        <meta
          property="og:description"
          content={
            section.description
              ? section.description.replace(/<[^>]+>/g, "").slice(0, 160)
              : section.title
          }
        />
        {section.image && (
          <meta
            property="og:image"
            content={
              section.image.url.startsWith("http")
                ? section.image.url
                : `${process.env.NEXT_PUBLIC_API_URL}${section.image.url}`
            }
          />
        )}
        <meta property="og:url" content={`https://disegno.ovh/classes/${section.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${section.title} | Disegno`} />
        <meta
          name="twitter:description"
          content={
            section.description
              ? section.description.replace(/<[^>]+>/g, "").slice(0, 160)
              : section.title
          }
        />
        {section.image && (
          <meta
            name="twitter:image"
            content={
              section.image.url.startsWith("http")
                ? section.image.url
                : `${process.env.NEXT_PUBLIC_API_URL}${section.image.url}`
            }
          />
        )}
        <link rel="canonical" href={`https://disegno.ovh/classes/${section.slug}`} />
      </Head>

      {/* Page Header */}
      {section.image && (
        <PageHeader
          title={section.title}
          image={toMediaUrl(section.image.url)}
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
                          src={toMediaUrl(image.url)}
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

          {fileEntries.length > 0 && (
            <div className="mb-3">
              <h3 className="mb-4">Αρχεία PDF</h3>
              <div className="row g-4">
                {fileEntries.map((entry, index) => {
                  const pdf = entry.file;
                  const pdfUrl = toMediaUrl(pdf.url);
                  return (
                    <div key={entry.id || index} className="col-12 col-md-6 col-lg-4">
                      <div className="border rounded p-3 h-100 bg-white d-flex flex-column">
                        <div
                          className="rounded mb-3 d-flex align-items-center justify-content-center"
                          style={{ height: 180, background: "#f1f5f9", border: "1px solid #e2e8f0" }}
                        >
                          <img
                            src="/img/pdf-icon.svg"
                            alt="PDF"
                            style={{ width: 72, height: 72 }}
                          />
                        </div>
                        <h5 className="mb-2">{entry.title || pdf.name}</h5>
                        <p className="text-muted mb-3" style={{ fontSize: 14 }}>
                          {pdf.name}
                        </p>
                        <div className="mt-auto d-flex gap-2">
                          <a
                            href={pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm"
                          >
                            Προβολή
                          </a>
                          <a
                            href={pdfUrl}
                            download
                            className="btn btn-outline-secondary btn-sm"
                          >
                            Λήψη
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

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
              src={toMediaUrl(galleryImages[photoIndex].url)}
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
    fields: ["slug"],
  });

  const paths =
    sectionsRes && sectionsRes.data
      ? sectionsRes.data.map((section) => ({
          params: { slug: section.slug },
        }))
      : [];

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const sectionsRes = await fetchAPI("/sections", {
    filters: { slug: { $eq: slug } },
    populate: {
      image: true,
      gallery: true,
      section_categories: true,
      // file is a component, so nested media/relations need a second-level populate.
      file: {
        populate: "*",
      },
    },
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
