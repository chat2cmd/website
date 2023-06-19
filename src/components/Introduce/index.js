import React from 'react';
import styles from './styles.module.css';


function Introduce() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>Chat2CMD</h1>
                <p>基于命令行终端，提供Ai辅助工具，帮助开发者&运维人员解锁不同的命令参数，彻底告别死记硬背，并且留在终端</p>
                <a className={styles.btn} href="docs.html">快速开始</a>
            </div>
            <div className={styles.right}>
                <img src="tool.gif" alt="工具演示" />
            </div>
        </div>
    );
}

export default Introduce;
