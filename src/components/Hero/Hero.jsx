import style from './Hero.module.scss';

const Hero = () => {
    return (
        <div className={style.hero}>
            <h1 className={style.title}>My first React App</h1>
            <p className={style.subtitle}>A simple to-do app, with lists, columns and card</p>
        </div>
    );
};

export default Hero;