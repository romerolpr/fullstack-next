import { NextLink } from ".";

export const Rounded = ({ label, linkHref, linkLabel, children }) => (
    <div className="my-3 p-3 bg-body rounded shadow-sm">

        <h6 className="border-bottom pb-2 mb-0">{ label }</h6>

        <div className="d-block">
            { children }
        </div>
        
        {linkHref && (
        <small className="d-block text-end mt-3">
            <NextLink href={linkHref} label={linkLabel}/>
        </small>
        )}
        
    </div>
)