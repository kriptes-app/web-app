interface CardProps {
  dataValue: string;
  text: string;
  icon?: string;
}

export type KnowledgeCardProps = CardProps[];

export default function KnowledgeCard({ dataValue, text, icon }: CardProps) {
  return (
    <div className="card bg-violet-200 w-[350px] p-10 rounded-[40px]">
      <h3 className="text-3xl">
        <span className="text-violet-400">{dataValue}</span> {text}
      </h3>
      <i className={icon}></i>
    </div>
  );
}
