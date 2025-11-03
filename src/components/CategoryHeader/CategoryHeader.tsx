import styles from "./CategoryHeader.module.css";

type CategoryHeaderProps = {
  title: string;
};

export default function CategoryHeader({ title }: CategoryHeaderProps) {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}