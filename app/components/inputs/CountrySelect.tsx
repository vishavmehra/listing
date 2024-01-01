'use client'

import useCountries from '@/app/hooks/useCountries';
import Select from 'react-select';

export type CountrySelectValue = {
    flag: string;
    label: string;
    latlng: number[];
    region: string;
    value: string;
}

interface CountrySelectProps {
    value?: CountrySelectValue;
    onChange: (value: CountrySelectValue)  => void;
}

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    background: '#404040',
    color: 'white',
    border: state.isFocused ? '2px solid #afafaf' : '2px solid #afafaf',
    boxShadow: 'none',
    '&:hover': {
      border: state.isFocused ? '2px solid #3182ce' : '2px solid #718096',
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    background: '#6B6B6B',
    boxShadow: 'none',
  }),
};

const CountrySelect: React.FC<CountrySelectProps> = ({
    value,
    onChange
}) => {
    const { getAll } = useCountries();
    return (  
        <div>
            <Select
            styles={customStyles}
                className='border-0'
                placeholder="Anywhere"
                isClearable
                options={getAll()}
                value={value}
                onChange={(value) => onChange(value as CountrySelectValue)}
                formatOptionLabel={(option: any) => (
                <div className="
                flex flex-row items-center gap-3">
                    <div>{option.flag}</div>
                    <div>
                    <span className="text-neutral-200 ml-1">
                        {option.label}
                    </span>
                    <span className="text-neutral-300 ml-1">
                        , {option.region}
                    </span>
                    </div>
                </div>
                )}
                classNames={{
                control: () => 'p-3',
                input: () => 'text-lg',
                option: () => 'text-lg'
                }}
                theme={(theme) => ({
                ...theme,
                borderRadius: 6,
                colors: {
                    ...theme.colors,
                    primary: '#232323',
                    primary25: '#5E5E5E'
                }
                })}
            />
        </div>
    );
}
 
export default CountrySelect;