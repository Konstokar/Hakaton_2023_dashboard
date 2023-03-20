package com.cbr.testTask.db.Alinke;

import com.cbr.testTask.db.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "universities")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UniversitiesEntity extends BaseEntity {
    @Column(name = "name")
    private String name;
}
