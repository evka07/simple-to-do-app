import style from "./List.module.scss"
import Column from "../Column/Column.jsx";

const List = () => {
    return <div>
        <header className={style.header}>
            <h2 className={style.title}>Things to do<span>soon!</span></h2>
        </header>
        <p className={style.description}>Interesting things I want to check out</p>
        <section className={style.columns}>
            {Column({ title: 'Books' })}
            {Column({ title: 'Movies' })}
            {Column({ title: 'Games' })}
        </section>
    </div>;
};

export default List;
