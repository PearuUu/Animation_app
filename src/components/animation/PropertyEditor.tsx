import React from 'react';
import { ControllerUpdate, Lookup, SpringRef } from 'react-spring';
import PropertyInput from './PropertyInput';
import Button, { ButtonType } from '../common/Button';
import { IoPlayOutline, IoRefreshSharp } from 'react-icons/io5';

interface Props {
  config: ControllerUpdate;
  onChange: (path: string[], value: number) => void;
  api: SpringRef<Lookup<unknown>>
}

const PropertyEditor: React.FC<Props> = ({config, onChange, api}) => {

    const renderInputs = (obj: ControllerUpdate, path: string[] = []) => {
      return Object.entries(obj).map(([key, value]) => {
        if (typeof value === "number") {
          return (
            <div key={key} className="py-1 ml-10">
              <PropertyInput
                key={key}
                value={value}
                onChange={(value) => onChange([...path, key], value)}
                min={0}
                max={500}
                step={0.1}
                title={key}
              />
            </div>
          );
        } else if (typeof value === "object") {
          return (
            <div key={key} className="ml-10">
              <span className="text-lg font-semibold">{key}</span>
              {renderInputs(value, [...path, key])}
            </div>
          );
        }
        return null;
      });
    };

    const handleRun = () => {
      api.start(config as object);
    };

    const handleReset = () => {
      api.start({ from: { ...config.from } });
    };

    const handleReverse = () => {
      api.start({ ...config, reverse: true });
    };

    return (
      <div className="w-1/2 flex flex-col gap-3">
        <div className="flex flex-col w-full gap-3">{renderInputs(config)}</div>

        <div className="pt-5 flex gap-3 ml-10">
          <Button type={ButtonType.Primary} onClick={handleRun}>
            <IoPlayOutline className="text-2xl font-extrabold" />
          </Button>

          <Button type={ButtonType.Secondary} onClick={handleReset}>
            <IoRefreshSharp className="text-2xl scale-x-[-1]" />
          </Button>

          <Button type={ButtonType.Accent} onClick={handleReverse}>
            <IoPlayOutline className="text-2xl rotate-180" />
          </Button>
        </div>
      </div>
    );
};

export default PropertyEditor;