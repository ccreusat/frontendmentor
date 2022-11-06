import "./Card.scss";

interface JobProps {
  logo: string;
  company: string;
  new: string;
  featured: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
}

interface CardProps {
  job: JobProps;
  filterBy: (tag: string) => void;
  jobTags: any[];
}

export const Card = ({ job, filterBy, jobTags }: CardProps) => {
  const handleFilterBy = (tag: any) => filterBy(tag);

  return (
    <div className={`job-card ${job.featured ? "featured" : ""}`}>
      <img src={`/${job.logo}`} alt="Photosnap" />

      <div className="job-card__description">
        <div className="job-card__header flex">
          <strong className="job-card__company">{job.company}</strong>
          {job.new && <span className="badge badge--new">New!</span>}
          {job.featured && (
            <span className="badge badge--featured">Featured</span>
          )}
        </div>
        <h3 className="job-card__title">
          <a href="/">{job.position}</a>
        </h3>
        <div className="job-card__footer flex">
          <span>{job.postedAt}</span>
          <span>{job.contract}</span>
          <span>{job.location}</span>
        </div>
      </div>

      <div className="job-card__tags flex">
        {jobTags.map((tag: string, index: number) => (
          <strong key={index} onClick={() => handleFilterBy(tag)}>
            {tag}
          </strong>
        ))}
      </div>
    </div>
  );
};
