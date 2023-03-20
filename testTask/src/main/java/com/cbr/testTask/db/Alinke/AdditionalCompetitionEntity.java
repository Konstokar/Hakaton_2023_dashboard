package com.cbr.testTask.db.Alinke;

import com.cbr.testTask.db.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "additional_competition")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AdditionalCompetitionEntity extends BaseEntity {
    @Column(name = "ac_vuz_id")
    private int acVuzId;

    @Column(name = "direction_of_study")
    private String directionOfStudy;
    @Column(name = "link_of_certificate")
    private String linkOfCertificate;
}
