import React from 'react'
import SectionTitleLineLeft from './SectionTitleLineLeft'
import SectionTitleLineRight from './SectionTitleLineRight'

const SectionTitle = ({ title = 'title goes here'}) => {
    return (
        <div className="w-full h-16 gap-4 flex items-center justify-center">
            <SectionTitleLineLeft/>

            {/* here is the title of the section */}
            <h2 className="font-semibold uppercase text-lg">{title}</h2>

            <SectionTitleLineRight/>
        </div>
    )
}

export default SectionTitle