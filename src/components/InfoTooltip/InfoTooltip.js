import success from '../../images/success.svg';
import fail from '../../images/fail.svg';
import './InfoTooltip.css';

const ICONS = {
  success: success,
  fail: fail
}

function InfoToolTip({ onClose, isOpen, status: { iconType, text } = {} }) {

  return (
    <section
      className={`tooltip ${isOpen && 'tooltip_opened'}`}
    >
      <div
        className="tooltip__container"
        name="tooltip-popup"
      >
        <button
          type="button"
          className="tooltip__close"
          onClick={onClose}
        />
        <img
          src={ICONS[iconType]}
          className="tooltip__img"
          alt={text}
        />
        <h2 className="tooltip__info">
          {text}
        </h2>
      </div>
    </section>
  );
}

export default InfoToolTip;
