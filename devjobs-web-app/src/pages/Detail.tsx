// React
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
// Components
import { BrandLogo, Button, EmptyScreen } from "../components";
import { DetailSection } from "../components/Detail/Section";
// TypeScript
import { JobProps, ReactQueryProps } from "../types/types";
// API
import { getJob } from "../api/api";
import { useEffect, useState } from "react";

const Detail = () => {
  const { id } = useParams<"id">();
  const { isLoading, data }: ReactQueryProps = useQuery("job", () =>
    getJob(id)
  );
  const [job, setJob] = useState({} as JobProps);

  useEffect(() => setJob(data), [data]);

  if (isLoading) {
    return <EmptyScreen text="Loading..." />;
  }

  if (!job) return null;

  return (
    <>
      <section className="detail">
        <article className="detail-header">
          <BrandLogo
            logoBackground={job.logoBackground}
            company={job.company}
          />
          <div className="detail-info">
            <div>
              <h2>{job.company}</h2>
              <span className="text-grey-400 lowercase">{job.company}.com</span>
            </div>
            <div>
              <Button
                isLink
                href={job.website}
                variant="secondary"
                target="_blank"
                rel="nofollow"
              >
                Company Site
              </Button>
            </div>
          </div>
        </article>
        <article className="description">
          <div className="description-top">
            <div>
              <p>
                <span className="text-grey-700">{job.postedAt}</span>
                <strong className="text-grey-700">&#9679;</strong>
                <span className="text-grey-700">{job.contract}</span>
              </p>
              <h1 style={{ marginBlock: ".8rem" }}>{job.position}</h1>
              <h2 className="card-location text-violet-400">{job.location}</h2>
            </div>
            <Button
              isLink
              href={job.apply}
              variant="primary"
              target="_blank"
              rel="nofollow"
            >
              Apply Now
            </Button>
          </div>
          <p>{job.description}</p>
          <DetailSection
            title="Requirements"
            content={job.requirements["content"]}
            items={job.requirements["items"]}
            unordered={true}
          />
          <DetailSection
            title="What You Will Do"
            content={job.role["content"]}
            items={job.role["items"]}
            unordered={false}
          />
        </article>
      </section>

      <div className="detail-footer">
        <div className="detail-inner">
          <div>
            <h3>{job.position}</h3>
            <p>So Digital Inc.</p>
          </div>
          <Button
            isLink
            href={job.apply}
            variant="primary"
            target="_blank"
            rel="nofollow"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default Detail;
