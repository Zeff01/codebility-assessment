import React from 'react'
import SectionTitleLineLeft from './SectionTitleLineLeft'
import SectionTitleLineRight from './SectionTitleLineRight'

const SectionTitle = ({ title = 'title goes here'}) => {
    return (
        <div className="w-full h-16 gap-2 md:gap-4 flex items-center justify-center px-4">
            <SectionTitleLineLeft/>

            {/* here is the title of the section */}
            <h2 className="font-semibold uppercase text-base md:text-lg whitespace-nowrap">{title}</h2>

            <SectionTitleLineRight/>
        </div>
    )
}

export default SectionTitle