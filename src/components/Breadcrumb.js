import Link from "next/link";

import styles from "../_assets/css/modules/breadcrumb.module.css";

export const Breadcrumb = ({ label }) => (
    <div className="file-navigation mb-3 d-flex flex-items-start mt-3">
        <div className="flex-1 mx-2 flex-self-center f4">
        <div className="d-none d-sm-block">
            <span className="text-bold">
            <span className="d-inline-block wb-break-all">
                <Link href={"/"}>
                    <a title="fullstack-next" className="link">fullstack-next</a>
                </Link>
            </span>
            </span>
            <span className="mx-1 breadcrumb-arrow"><i className={`bi bi-arrow-right-short ${styles.arrowCrumb}`}></i></span><strong className="final-path">{label}</strong><span className="mx-1">/</span>
        </div>
        </div>
    </div>
)