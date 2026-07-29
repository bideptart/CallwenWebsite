import React from 'react';
import {
  Check,
  Minus,
  RotateCw,
  Sparkles,
} from 'lucide-react';
import {
  COMPARISON_MATRIX,
  FLIP_CARDS_DATA,
} from './Comparison.data';
import './Comparison.css';

export const Comparison = () => {
  return (
    <section className="cmpSection" id="comparison">
      <div className="cmpStrip" aria-hidden="true" />

      <div className="container">
        {/* Header Section */}
        <div className="cmpHeader">
          <span className="cmpPillTag">
            <Sparkles size={11} />
            COMPARISON MATRIX
          </span>
          <h2 className="cmpTitle">
            Compare plans <em className="cmpTitleEm">side by side.</em>
          </h2>
          <p className="cmpSubtitle">
            See exactly what you get at every tier — included minutes, effective rate,
            voice stack, and support level, all in one clean view.
          </p>
        </div>

        {/* Compact Comparison Matrix Table */}
        <div className="cmpTableCard">
          <table className="cmpTable">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Starter</th>
                <th className="cmpColGrowth">
                  <div className="cmpGrowthHeader">
                    <span>Growth</span>
                    <span className="cmpPopularTag">MOST POPULAR</span>
                  </div>
                </th>
                <th>Scale</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_MATRIX.map((row) => (
                <tr key={row.feature}>
                  <td className="cmpFeatureName">{row.feature}</td>

                  {/* Starter Cell */}
                  <td>
                    {typeof row.starter === 'boolean' ? (
                      row.starter ? (
                        <span className="cmpCheck"><Check size={16} /></span>
                      ) : (
                        <span className="cmpDash"><Minus size={16} /></span>
                      )
                    ) : (
                      row.starter
                    )}
                  </td>

                  {/* Growth Cell (Highlighted) */}
                  <td className="cmpColGrowth">
                    {typeof row.growth === 'boolean' ? (
                      row.growth ? (
                        <span className="cmpCheck"><Check size={16} /></span>
                      ) : (
                        <span className="cmpDash"><Minus size={16} /></span>
                      )
                    ) : (
                      row.growth
                    )}
                  </td>

                  {/* Scale Cell */}
                  <td>
                    {typeof row.scale === 'boolean' ? (
                      row.scale ? (
                        <span className="cmpCheck"><Check size={16} /></span>
                      ) : (
                        <span className="cmpDash"><Minus size={16} /></span>
                      )
                    ) : (
                      row.scale
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 3D Flip Cards Grid Below Table */}
        <div className="cmpFlipGrid">
          {FLIP_CARDS_DATA.map((card) => {
            const Icon = card.icon;

            return (
              <div key={card.id} className="cmpFlipContainer">
                <div className="cmpFlipCard">
                  {/* Front Side */}
                  <div className="cmpCardSide cmpCardFront">
                    <div className="cmpCardFrontTop">
                      <span className={`cmpBadge cmpBadge--${card.theme}`}>
                        {card.badge}
                      </span>
                      <span className="cmpFlipHint">
                        <RotateCw size={12} />
                        Flip
                      </span>
                    </div>

                    <div className="cmpCardFrontBody">
                      <span className="cmpFrontMetric">{card.frontMetric}</span>
                      <h4 className="cmpFrontTitle">{card.frontTitle}</h4>
                      <p className="cmpFrontSub">{card.frontSubtitle}</p>
                    </div>
                  </div>

                  {/* Back Side (3D Flipped Specs) */}
                  <div className={`cmpCardSide cmpCardBack cmpCardBack--${card.theme}`}>
                    <h4 className="cmpBackTitle">{card.backTitle}</h4>
                    <ul className="cmpBackList">
                      {card.backSpecs.map((spec, idx) => (
                        <li key={idx}>
                          <Check size={14} />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Comparison;